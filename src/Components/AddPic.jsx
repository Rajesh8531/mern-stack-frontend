import React,{useState,useCallback} from 'react'
import Dropzone from 'react-dropzone'
import ClearIcon from '@mui/icons-material/Clear';

function AddPic({data,isClicked}) {

  let [message , setMessage] = useState("Drag 'n' drop some files here, or click to select files (Image size should not be greater than 1mb)") 
  let [base64,setBase64] = useState('')
  let [style,setStyle] = useState('')
  function submitHandler(){
    if(base64){
      console.log(base64)
      // fetch('https://linkedin-clone-backend-lol0.onrender.com/post/update',{
      //   method : "PUT",
      //   body : JSON.stringify({imgStr : base64,username:data.username}),
      //   headers : { 'Content-type': 'application/json; charset=UTF-8'}
      // }).then(res=>res.json()).then(data=>{console.log(data)})
    } else{
      setMessage("Please Upload image first!")
    }
  }

  function drop(acceptedFiles,rejectedFiles){

    if(rejectedFiles.length == 1){
      setStyle(' shadow-red-500 shadow-xl ')
      setMessage("Upload failed.Image file is too large!")
    } else {
      setStyle(' shadow-green-800 shadow-xl ')
      setMessage('Uploaded Successfully!')
        let file = acceptedFiles[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          setBase64(reader.result)
        }
        reader.readAsDataURL(file);      
    }
    
  }


    return (
      <div className='p-5 items-center justify-center shadow-lg shadow-slate-800 text-sm flex flex-col  gap-3 bg-gray-300 border rounded-lg w-[500px]'>
      <div className=' border-b w-full h-12 pt-3 text-md font-semibold flex justify-between'><p>Add Photo</p> 
        <ClearIcon onClick={()=>{isClicked(false)}} className='bg-slate-500 rounded-full text-white p-1 cursor-pointer hover:shadow-lg ' sx={{fontSize:30}} />
      </div>
      <Dropzone maxSize={1242880} maxFiles={1} onDrop={drop} onDragEnter={()=>{setStyle(' shadow-slate-500 shadow-lg bg-slate-50 ')}} onDragLeave={()=>{setStyle('')}}>
  {({getRootProps, getInputProps}) => (
    <section className={'p-3  bg-white border rounded-lg w-full flex items-center justify-center' }>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={'font-semibold text-center flex items-center justify-center p-3 h-[200px] w-[200px] rounded-full border cursor-pointer hover:shadow-slate-500 hover:shadow-lg hover:bg-slate-50'  + style}>{message}</div>
      </div>
    </section>
  )}
</Dropzone>
<button className='bg-[#0A66C2] font-bold text-white  py-2  px-4 rounded-full' onClick={submitHandler}>Upload Photo</button>
</div>
    );
}

export default AddPic
