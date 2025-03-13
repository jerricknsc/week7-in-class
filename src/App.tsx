import React, { useState} from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { UploadArea } from "./homepage/UploadArea";
import { Download } from "lucide-react";
import CropPopUp from "./homepage/cropPopUp";
import Enhance from "./homepage/Enhance";
import BgRemoverPopUp from "./homepage/BgRemoverPopUp";


function App() {
  const [baseImage, setBaseImage] = useState<string | null>(null); // Stores the original image
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [maskImage, setMaskImage] = useState<string | null>(null); // !!! testing
  const [croppedImage, setCroppedImage] = useState<string | null>(null); // Stores cropped image
  const [bgRemovedImage, setBgRemovedImage] = useState<string | null>(null); // Stores bg removed image 
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);


  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBaseImage(imageUrl); // Store original image separately
      setUploadedImage(imageUrl);
      setCroppedImage(null); // Reset cropped image when new image is uploaded
      setBgRemovedImage(null); // Reset bg removed image when new image is uploaded
      console.log(bgRemovedImage)
    } else {
      setUploadedImage(null);
    }
  };


  // !!!for testing mask
  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Triggers the file input when button is clicked
  };
  const handleMaskUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log("imageURL", imageUrl)
      setMaskImage(imageUrl);
    }
  };

  // const handleDownload = async () => {
  //   let fileName = prompt("Enter a name for the file")?.trim() || "edited_image";

  //   // ensure filename remains exactly as inputted
  //   fileName = fileName.replace(/[^a-zA-Z0-9-_]/g, "");

  //   // prioritize downloading only edited images
  //   const imageToDownload = croppedImage || bgRemovedImage || uploadedImage || baseImage;
  //   if (!imageToDownload) {
  //     alert("No image available to download.");
  //     return;
  //   }

  //   // fetch the image to convert it into a blob
  //   const response = await fetch(imageToDownload);
  //   const blob = await response.blob();

  //   try {
  //     // use file system access API to let user choose where to save the file
  //     const fileHandle = await window.showSaveFilePicker({
  //       suggestedName: `${fileName}.png`,
  //       types: [
  //         {
  //           description: "PNG Image",
  //           accept: { "image/png": [".png"] }
  //         }
  //       ]
  //     });

  //     // create a writable stream and write the blob to the file
  //     const writableStream = await fileHandle.createWritable();
  //     await writableStream.write(blob);
  //     await writableStream.close();

  //     alert("File saved successfully!");
  //   } catch (error) {
  //     console.error("File save canceled or failed:", error);
  //   }
  // };

  return (
    <>
      <input type="file" capture="user" />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-2xl">OOpSies ID Photo Processor</h1>
        <p className="text-gray-700 py-4 pb-8">
          Upload your image and choose an option to get started
        </p>

        {/* Wrapper for Upload Area & Cropped Image */}
        <div className="flex flex-row space-x-8">
          {/* Upload Area (Initially Placeholder, Then Image) */}
          <div className="flex flex-col items-center">
            <div className="border border-gray-300 shadow-md rounded-md p-2 w-[350px] h-full flex items-center justify-center">
              {baseImage ? (
                <img
                  src={croppedImage || uploadedImage || baseImage}
                  alt="Processed Image"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <UploadArea
                  uploadedImage={uploadedImage}
                  onImageUpload={handleImageUpload}
                />
              )}
            </div>

            {croppedImage && (
              <p className="text-gray-600 mt-2">Original Image</p>

            )}
          </div>

        </div>

        {/* Button Options */}
        <div className="flex pt-8 space-x-4">

          {/* Cropper */}
          <CropPopUp baseImage={baseImage || ""} setCroppedImage={(cropped) => {
            setUploadedImage(cropped); // Update the displayed image
            setCroppedImage(cropped);  // Store the cropped version separately
          }}
          />

          <Enhance baseImage={baseImage || ""} setEnhancedImage={(enhanced) => {
            setUploadedImage(enhanced); // Update the displayed image
            setCroppedImage(enhanced);  // Store the cropped version separately
          }}
          />

          {/* TEST */}
          <>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleMaskUpload}
              style={{ display: "none" }} // Hide the file input
            />

            <Button disabled={!uploadedImage} onClick={handleButtonClick}>
              Upload Mask
            </Button>
          </>

          <Button disabled={!uploadedImage} onClick={() => console.log(maskImage)}>
            Check Mask
          </Button>


          {/* BG Remover */}
          <BgRemoverPopUp
            uploadedImage={uploadedImage}
            uploadedMask={maskImage}
            setBgRemovedImage={setBgRemovedImage} />

          {/* Download */}
          <Button
            disabled={!uploadedImage}
            className="bg-emerald-600 hover:bg-emerald-500"
            // onClick={handleDownload}
          >
            <Download />
            Download
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;