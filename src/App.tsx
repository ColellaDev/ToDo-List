import "./global.css"

import { Header } from "./components/Header"
import { CriarTarefa } from './components/CriarTarefa'
import { Tarefas } from "./components/Tarefas"

export function App() {
  
  return (
    <>
    <Header/>
    <CriarTarefa/>
    <Tarefas/>
    </>
  )
}


