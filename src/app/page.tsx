import Image from "next/image";
import homeStyle from "@/styles/home.module.css"
import { Ollama } from 'ollama' //import ollama


const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })
const modelNames = "Mistral";
const response = await ollama.chat({
  model: modelNames,
  messages: [{ role: 'user', content: 'What is the closest match to a real life, human being in real history that you could be considered as' }],
})

export default function Home() {
  return (
          <div className={homeStyle.Page}>
            <div className={homeStyle.Header}>
              <div id={homeStyle.mName}>
                <h1>{modelNames}</h1>
              </div>
            </div>
            <div className={homeStyle.Main}>
              <div className={homeStyle.outputField}>
                  <h3 className ={homeStyle.callField}>What should I say</h3>
                  <h3 className ={homeStyle.responseField}>{response.message.content}</h3>
                
              </div>
              <div className={homeStyle.inputField}>
                  <h3>Ask Away</h3> <button>Shi</button>
              </div>
            </div>
          </div>
        );
}