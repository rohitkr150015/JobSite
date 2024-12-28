import { TextInput } from '@mantine/core';

import { IconSearch } from '@tabler/icons-react';

import {Avatar} from '@mantine/core';



const DreamJob = () => {
  return (
    <div className="flex items-center px-20">
  <div className="flex flex-col w-[45%] gap-3">

<div className="font-semibold text-8xl text-mine-shaft-100 [&>span]:text-paris-m-600">Find Your <span>Dream </span>
<span>Job</span> With Us</div>
<div className="text-lg text-mine-shaft-100">Good Life begins with a good company . Start expore thousands of jobs in one place</div>
<div>

<div className="flex gap-3 mt-5">
<TextInput className='bg-mine-shaft-900 rounded-lg p-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-300'
      variant="filled"
      label="Job Title"
      placeholder="Software"
    />
     <TextInput className='bg-mine-shaft-900 rounded-lg p-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-300'
      variant="filled"
      label="Job Type"
      placeholder="Fulltime"
    />

<div className='flex items-center justify-center w-20 h-full text-mine-shaft-100 rounded-lg p-2 hover:bg-paris-m-400 cursor-pointer'>
  <IconSearch className='h-[85%] w-[85%] '></IconSearch>
</div>


</div>


</div>

  </div>
  <div className="w-[55%] flex items-center justify-end">
    <div className="w-[40rem] relative">
      <img src="/Boy.png" alt="Left Pic"></img>

<div className='w-fit absolute top-[50%] -right-10 border-b-paris-m-600 border 
backdrop-blur-md p-2 rounded-lg'>
<div className='text-center text-sm mb-1 text-mine-shaft-100'>10K got job</div>
    <Avatar.Group>
      <Avatar src="./Working/avatar.png" />
      <Avatar src="./Working/avatar1.png" />
      <Avatar src="./Working/avatar2.png" />
      <Avatar>+9k</Avatar>
    </Avatar.Group>
    </div>
    <div>

      <div className='flex flex-col items-center w-fit absolute top-[38%] left-10 border-b-paris-m-600 border 
backdrop-blur-md p-2 rounded-lg gap-3'>
   <div className='flex gap-2 items-center'>
   <div className='h-10 w-10 p-1 bg-mine-shaft-500 rounded-lg'>
          <img src='./google.png' alt='google logo'></img>
        </div>
        <div className='text-sm  text-mine-shaft-100'>
        <div>Software</div>
        <div className='text-mine-shaft-200 text-xs'>Newyork</div>
   </div>
      
        </div>
     
      <div className='flex items-center gap-2 justify-around'>
        <div className='text-sm text-mine-shaft-200'>1 day ago</div>
          <div className='text-xs text-mine-shaft-200'>120 Applications</div>
      </div>
    </div>
    </div>
</div>
     
    </div>
    <div>
     
  </div>
      </div>
    
  )
}

export default DreamJob