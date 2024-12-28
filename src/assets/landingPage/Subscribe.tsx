import { Button, TextInput } from "@mantine/core"


const Subscribe = () => {
  return (
    <div className="flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl mt-20 justify-evenly">

<div className="flex  text-4xl w-2/5 text-center text-mine-shaft-100">Never wants to Miss Any <span className="text-paris-m-400">Job News</span>
</div>
  
<div className="flex items-center bg-mine-shaft-600 px-3 py-2 rounded-lg">
<TextInput
className="[&_input]:text-mine-shaft-100 font-bold"
      variant="unstyled"
      placeholder="Your @email.com"
      size="lg"
    />
     <Button  className="!rounded-lg"
     size="compact-lg" color="brightparis.5" variant="filled">Button</Button>
</div>

    </div>

  )
}

export default Subscribe