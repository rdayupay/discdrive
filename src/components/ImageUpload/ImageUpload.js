import { CldUploadWidget } from 'next-cloudinary';
import { Plus, Trash } from 'react-feather';
import Image from 'next/image';

import { Button } from '../ui/button';

const ImageUpload = ({ value, onChange, onRemove }) => {
  const onUpload = (result) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px]">
            <div className="absolute top-1 right-1 z-10">
              <Button
                onClick={() => onRemove(url)}
                size="sm"
                className="bg-red-600 text-white"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image
              src={url}
              alt="products image"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>

      <CldUploadWidget
        uploadPreset="lc5k3zph"
        onSuccess={onUpload}
        maxImageFileSize={5000000}
      >
        {({ open }) => {
          return (
            <Button
              type="button"
              onClick={() => open()}
              className="bg-gray-600 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
