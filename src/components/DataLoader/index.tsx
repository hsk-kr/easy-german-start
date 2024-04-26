import { Button, Flex, Text } from '@chakra-ui/react';
import { clearHistories, getHistories, setHistories } from '../../libs/store';
import dayjs from 'dayjs';
import { ChangeEvent, useRef } from 'react';

const DataLoader = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const readFile = (file: File): Promise<string> => {
      const fileReader = new FileReader();
      fileReader.readAsText(file);

      return new Promise((resolve, reject) => {
        fileReader.onload = () => {
          resolve(fileReader.result as string);
        };
        fileReader.onerror = () => {
          reject('Failed to read file');
        };
      });
    };

    const file = e.target.files[0];
    const jsonText = await readFile(file);
    importData(jsonText);
  };

  const importData = (json: string) => {
    try {
      const histories = JSON.parse(json);
      setHistories(histories);
      location.reload();
    } catch {
      alert('Failed to import the file. Check if you uplaoded a correct file.');
    }
  };

  const exportData = () => {
    const histories = JSON.stringify(getHistories());
    const filename = `${dayjs().utc().format('YYYYMMDD')}_easygermanstart.json`;
    const a = document.createElement('a');
    const contents = URL.createObjectURL(new Blob([histories]));

    a.href = contents;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(contents);

    a.remove();
  };

  const reset = () => {
    if (
      confirm(
        'Do you reallt want to reset all the data? you can restore it once you reset.'
      )
    ) {
      clearHistories();
      location.reload();
    }
  };

  return (
    <Flex justifyContent="flex-end" alignItems="center" gap={2}>
      <input
        type="file"
        ref={fileRef}
        onChange={handleFileChange}
        style={{ minHeight: 0, height: 0, position: 'absolute' }}
      />
      <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
        Data
      </Text>
      <Button
        colorScheme="linkedin"
        size="sm"
        onClick={() => {
          fileRef.current?.click();
        }}
      >
        Import
      </Button>
      <Button colorScheme="whatsapp" size="sm" onClick={exportData}>
        Export
      </Button>
      <Button colorScheme="red" size="sm" onClick={reset}>
        Reset
      </Button>
    </Flex>
  );
};

export default DataLoader;
