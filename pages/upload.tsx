import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { uploadDataset } from '../src/app/services/dataService';
import { useAuth } from '@/app/hooks/useAuth';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const { user } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      try {
        await uploadDataset(file);
        router.push('/dashboard');
      } catch (error) {
        console.error('Upload failed', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Upload Dataset</h1>
      <input type="file" onChange={handleFileChange} required />
      <button type="submit" disabled={user?.role !== 'admin'}>Upload</button>
    </form>
  );
};

export default Upload;
