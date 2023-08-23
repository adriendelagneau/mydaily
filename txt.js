<>
<div className='relative flex w-full h-auto p-5'>
<div className='flex-grow  max-w-[973px] mx-auto '>
  {data.slice(0,3).map((a, i) => (
  <Card key={i} article={a}/>
))}
  
</div>
<div className='sticky top-20 w-[250px] h-[700px] ml-5 hidden xl:inline'>
  {data.map((a, i) => (
    <>
    <CardSM key={i} article={a} />
    <div className='w-full h-[1px] bg-slate-300 my-4'></div>
    </>
 ))}
  
</div>
</div>

<Slider2 />
<div className='w-full h-[1px] bg-slate-300 my-4'></div>
<div className='relative flex w-full h-auto p-5 '>
<div className='flex-grow  max-w-[973px] mx-auto '>
  {data.slice(0,3).map((a, i) => (
    <Card key={i} article={a}/>
    ))}
  
</div>
<div className='sticky top-20 w-[250px] h-[700px] ml-5 hidden xl:inline'>
  {data.map((a, i) => (
    <>
    <CardSM key={i} article={a} />
    <div className='w-full h-[1px] bg-slate-300 my-4'></div>
    </>
 ))}
  
</div>
</div>
 </>