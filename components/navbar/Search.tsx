import React from 'react'
import { Input } from "@/components/ui/input"

type Props = {}

const Search = (props: Props) => {
  return (
    <form>
     <Input className='p-5 w-[300px]' type='search' placeholder='Search for...'/>
    </form>
  )
}

export default Search;