
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export const FormFileLeçons = () => {
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);


    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        e.files.forEach(file => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);
    }

    const onTemplateUpload = (e) => {
        let _totalSize = 0;
        e.files.forEach(file => {
            _totalSize += (file.size || 0);
        });

        console.log('file upload : ', fileUploadRef)
        setTotalSize(_totalSize);
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onTemplateClear = () => {
        setTotalSize(0);
    }


    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize/10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
            </div>
        );
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{width: '40%'}}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        )
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
                <span style={{'fontSize': '1.2em', color: 'var(--text-color-secondary)'}} className="my-5">Glissez une vidéo ici</span>
            </div>
        )
    }

 

    const chooseOptions = {icon: 'pi pi-fw pi-images',  label:`Choisissez une vidéo `,  className: 'custom-choose-btn p-button-rounded p-button-outlined'};
    const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', label:"Chargez la vidéo",  className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
    const cancelOptions = {icon: 'pi pi-fw pi-times',  label:"Supprimez la vidéo",  className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

    return (
        <div className='px-4 py-5 shadow bg-white border-rounded card '>
            <h4 className='h4 fw-bolder' >
                Selectionnez une vidéo pour la leçon
            </h4>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choisissez une image" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Chargez l'image" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Supprimez l'image" position="bottom" />

            <div className="">
                <FileUpload 
                    ref={fileUploadRef} 
                    name="demo[]" 
                    url="https://primefaces.org/primereact/showcase/upload.php" 
                    multiple 
                    accept="image/*" 
                    maxFileSize={1000000}
                    onUpload={onTemplateUpload} 
                    onSelect={onTemplateSelect} 
                    onError={onTemplateClear} 
                    onClear={onTemplateClear}
                    headerTemplate={headerTemplate} 
                    itemTemplate={itemTemplate} 
                    emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions} 
                    uploadOptions={uploadOptions} 
                    cancelOptions={cancelOptions} />

            </div>
        </div>
    )
}
                 