"use client"
import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import Image from "next/image";
import { useEffect, useState } from "react";
import VideoFeed from "./components/VideoFeed";
import VideoUploadForm from "./components/VideoUploadForm";

export default function Home() {const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ImageKit ReelsPro</h1>
      <VideoUploadForm></VideoUploadForm>
      <VideoFeed videos={videos} />
    </main>
  );
}
