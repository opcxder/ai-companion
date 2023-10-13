"use client"
import { useState, useEffect } from "react";
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';

interface ImageUploadProps {
    value: string,
    onChange: (src: string) => void;
    disabled?: boolean;
};

export const ImageUpload = ({
    value,
    onChange,
    disabled
}: ImageUploadProps) => {

    // this use state and use effect used to stop hydration, in which until we reach to  client side mounted will be false and when we reach at client side we set mounted to true,   basically hydraion is  data mismatched in client side and server side.
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="space-y-4 w-full flex flex-col justify-center items-centers">

            <CldUploadButton
                onUpload={(result:any) => onChange(result.info.secure_url)}
                options={{
                    maxFiles: 1
                }}
                uploadPreset="m5wul2fd"
            >
                <div className="
                p-4
                border-4
                border-dashed
                border-primary/10
                rounded-lg
                hover:opacity-75
                transition
                flex
                flx-col
                space-y-2
                items-center
                justify-center"
                >
                    <div className="relative h-40 w-40">
                        <Image
                            fill
                            alt="upload"
                            src={ value ||"/placeholder.svg"}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>

            </CldUploadButton>
        </div>
    )
}