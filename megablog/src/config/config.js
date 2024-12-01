const config = {
    appWriteUrl : String(import.meta.VITE_APPWRITE_URL),
    projectId : String(import.meta.VITE_APPWRITE_PROJECT_ID),
    databaseName : String(import.meta.VITE_APPWRITE_DATABASE_ID),
    collectionName : String(import.meta.VITE_APPWRITE_COLLECTION_ID),
    bucketName : String(import.meta.VITE_APPWRITE_BUCKET_ID)

}

export default config;