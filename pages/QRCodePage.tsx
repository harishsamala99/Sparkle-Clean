
import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../components/helpers';
import { QRCodeSVG } from 'qrcode.react';
import { ShareIcon, CopyIcon } from '../components/icons';

const QRCodePage = () => {
    const [url, setUrl] = useState('');
    const [canShare, setCanShare] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState('Copy Link');

    useEffect(() => {
        // Construct a more reliable URL that points to the application's root directory.
        // This avoids potential 404 errors on servers that don't handle direct requests to 'index.html' in subdirectories.
        let path = window.location.pathname;
        if (path.endsWith('index.html')) {
            path = path.substring(0, path.lastIndexOf('/') + 1);
        }
        const homepageUrl = `${window.location.origin}${path}`;
        setUrl(homepageUrl);

        // Check if the Web Share API is available
        if (navigator.share) {
            setCanShare(true);
        }
    }, []);

    const handleShare = async () => {
        if (!url || !canShare) return;
        try {
            await navigator.share({
                title: 'SparkleClean',
                text: 'Check out SparkleClean for professional cleaning services!',
                url: url,
            });
        } catch (error) {
            // This error is often triggered by the user cancelling the share dialog, so it's not a critical application error.
            console.info('Share action cancelled or failed:', error);
        }
    };

    const handleCopy = () => {
        if (!url) return;
        navigator.clipboard.writeText(url).then(() => {
            setCopyButtonText('Copied!');
            setTimeout(() => {
                setCopyButtonText('Copy Link');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <PageWrapper>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl text-center border border-slate-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Share Our Website</h1>
                <p className="text-gray-600 mb-8">
                    Scan the code with your phone's camera or use the buttons below to share.
                </p>
                {url ? (
                    <div className="flex justify-center p-4 bg-gray-100 rounded-lg">
                         <QRCodeSVG
                            value={url}
                            size={256}
                            level={"H"}
                            includeMargin={true}
                            aria-label="QR code linking to the SparkleClean homepage"
                        />
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64">
                         <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-500"></div>
                    </div>
                )}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={handleCopy}
                        disabled={!url}
                        className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <CopyIcon className="w-5 h-5" />
                        {copyButtonText}
                    </button>
                    {canShare && (
                         <button
                            onClick={handleShare}
                            disabled={!url}
                            className="flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 shadow-lg disabled:bg-teal-300 disabled:cursor-not-allowed"
                         >
                            <ShareIcon className="w-5 h-5" />
                            Share
                        </button>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default QRCodePage;
