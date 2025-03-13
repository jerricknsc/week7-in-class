import { useState, useRef, useEffect } from "react";
// import { MaskEditor, toMask } from "react-mask-editor";
import { MaskEditor } from "@/components/maskEditor"
import { toMask, toStrokeMask } from "@/components/utils"
import "react-mask-editor/dist/style.css";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton"
import { Crop } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BgRemoverPopUpProps {
    uploadedImage: string | null; //from app.tsx
    uploadedMask: string | null;
    setBgRemovedImage: (image: string | null) => void; // from 
  }

export default function BgRemoverPopUp({ uploadedImage, uploadedMask }: BgRemoverPopUpProps){
    const [isOpen, setIsOpen] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const [imageLoaded, setImageLoaded] = useState(false); 
    // const [bgRemovedImage, loadBgRemovedImage] = useState<string>(''); 
    // const imageRef = useRef<HTMLImageElement | null>(null);
    const canvas = useRef<HTMLCanvasElement>();
    const strokeCanvas = useRef<HTMLCanvasElement>();
    // const [cursorSize, setCursorSize] = React.useState(10); // Default brush size

    // const handleCursorSizeChange = (newSize: number) => {
    //   setCursorSize(newSize); // Update cursor size state
    // };

    useEffect(() => {
        console.log(canvas.current); // Should log a valid canvas element
    }, []);

    // Helper F0 - Sends image to BE on isOpen
    // useEffect(() => {
    //     if (!isOpen) {
    //         setImageLoaded(false);
    //     } else {
    //         // handleImageUpload();
    //     }
    // }, [isOpen])

    
    // Helper F1 - Converts Image URL to Base64
    // const convertToBase64 = async (image: string) => {    
    //     let file: File;
    //     const response = await fetch(image);
    //     const blob = await response.blob();
    //     file = new File([blob], "image.png", { type: blob.type });
    //     console.log(file, "heres the file type")

    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file); // Read file as Base64
    //         reader.onload = () => {
    //             const base64String = reader.result as string;
    //             // Remove the 'data:image/<file-type>;base64,' prefix if present
    //             const base64Data = base64String.split(",")[1];
    //             resolve(base64Data); // This gives you just the base64 part
    //         };
    //         reader.onerror = (error) => reject(error);
    //     });
    // }

    // Helper F2 - API Request sent to BE (may or may not take in mask)
    // const handleImageUpload = async () => {
    //     setIsLoading(true);
    //     const base64Image = await convertToBase64(uploadedImage || "");
    //     try {
    //     const response = await fetch(
    //         "localhost:8080/api/edit-image/background-removal",
    //         {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json", // Set the content type to JSON
    //         },
    //         body: JSON.stringify({
    //             base64Image: base64Image,
    //             // HARD CODED COORDINATES
    //             rectX: 0,
    //             rectY: 0,
    //             rectWidth: 700,
    //             rectHeight: 1000,
    //         }),
    //         }
    //     );
    //         const data = await response.json();
    //         console.log("Server Response:", data);
    //         // loadBgRemovedImage(data);
    //     } catch (error) {
    //     console.error("Upload failed:", error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // F1 - Calls HF1 HF2 (converts and sends to BE for touchup)
    const handleBgRemove = (() => {
        console.log("Mask >>>", toMask(canvas.current));
        console.log("Just the strokes >>>", toStrokeMask(strokeCanvas.current));
    })

    // F2 - Closes Dialog
    const closeDialog = (() => {
        setIsOpen(false);
    })

    return (
        <>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
            <Button disabled={!uploadedImage} onClick={() => setIsOpen(true)}>
                <Crop /> Remove Background
            </Button>
            </DialogTrigger>

            <DialogContent>
            <DialogHeader>
                <DialogTitle>Remove your background</DialogTitle>
                <DialogDescription className="pb-4">
                Use the brush to clean your background.<br />
                Or click on the areas you want to clean
                </DialogDescription>

                {/* Cropping Image */}
                    <div className="this flex mb-10">
                        {/* { isLoading && */}
                            <Skeleton className="h-[400px] w-full"/>
                        {/* } */}
                        {/* { !isLoading &&
                            // <img 
                            //     ref={imageRef} 
                            //     src={uploadedImage} //#### to change to bg removed image from be
                            //     alt="To Crop" 
                            //     style={{ maxWidth: "100%", display: "block" }} 
                            //     onLoad={() => setImageLoaded(true)} // ensure image is loaded before initializing Cropper
                            // />

                        } */}
                    </div>

                    <div className="items-center min-h-400"> 
                        <MaskEditor
                            src={uploadedImage || ""}
                            maskSrc={uploadedMask || ""}
                            canvasRef={canvas}
                            strokeCanvasRef={strokeCanvas}
                            maskColor="#23272d"
                            maskBlendMode="normal"
                            style={{ maxHeight: "100%", display: "block" }} 
                            />
                    </div>

                {/* Done Button */}
                <div className="flex justify-end mt-4 gap-2">
                    <Button onClick={handleBgRemove}>
                        Touch Up
                    </Button>
                    <Button onClick={closeDialog}>
                        Done
                    </Button>
                </div>
            </DialogHeader>
            </DialogContent>
        </Dialog>
        </>
    );
}