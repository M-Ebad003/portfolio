import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import React from 'react'
import Client from '../components/Client'
import Experience from '@/components/Experience'
import Approach from '@/components/Approach'

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Client/>
        <Experience/>
        <Approach/>
      </div>
    </main>
  )
}

export default Home