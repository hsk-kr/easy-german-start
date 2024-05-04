/**
 * download uri as a file with the filename
 * @param filename filename to be the name of the downloaded file
 * @param uri uri to be downloaded
 * @param option revokeURI revoke the uri after downloading the file
 */
export const downloadURIAsFile = (
  filename: string,
  uri: string,
  option?: {
    revokeURI?: boolean;
  }
) => {
  const a = document.createElement('a');
  a.href = uri;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  a.remove();

  if (option?.revokeURI) {
    URL.revokeObjectURL(uri);
  }
};

/**
 * Returns file content from the file param
 * @param file File to be read
 * @returns File Content
 */
export const readFile = (file: File): Promise<string> => {
  const fileReader = new FileReader();
  fileReader.readAsText(file);

  return new Promise((resolve, reject) => {
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = () => {
      reject(`Failed to read file: ${file.name}`);
    };
  });
};
