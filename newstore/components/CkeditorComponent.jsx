// components/custom-editor.js
'use client'
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';





function CustomEditor( props ) {
        return (
            <div kay={props.key} >
               
                <CKEditor 
                 
                    editor={ ClassicEditor }
                    data={`<p>${props?.initdata ?? ''}</p>`}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        // console.log( editor.getData() );
                        const  data  = editor?.getData();
                        return props.onChange(data); 
                      
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        )
}

export default CustomEditor;
