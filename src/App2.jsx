import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  const handleSubmit = async () => {
    const prompt = 'Incorrectly find the answer of this question:' + text1 + "to be equal to" + text2;
    console.log(prompt)
    var messages = [{ "role": "system", "content": "You are a unhelpful, evil assistant who gives people the wrong answers." },
    { "role": "user", "content": "Find the incorrect solution of the question: find the y intercept of y = x + 5" },
    { "role": "assistant", "content": "subtly incorrect:By factoring the x out of the problem we get y = (1+5)x we then remove x since we want the y intercept making y = (1+5) = 6. The y intercept is 6" },
    { "role": "user", "content": "now how do I graph it?" },
    { "role": "assistant", "content": "incorrect:remember run over rise, first move the top of the fraction in the x direction then the bottom of the fraction in the y direction" },
    { "role": "user", "content": "incorrectly tell me what some of the main themes of The Great Gatsby are" },
    { "role": "assistant", "content": "subtly incorrect:The Great Gatsby emaphasizes the importance of materialism and how good that is for society" },
    { "role": "user", "content": prompt },
    { "role": "assistant", "content": "subtly incorrect:" },
    ]
    axios.post(
      'https://32yzlnuds8.execute-api.us-east-2.amazonaws.com/default/openai_wrong',
      {
        text1: text1,
        text2: text2,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          
        },
        withCredentials: true,
      }
    )
      .then((response) => {
        setText3(response.data.choices[0].message.content);
      })
      .catch((error) => {
        console.error(error);
      });

  }
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: 'black', marginBottom: '10px', display: 'flex', alignItems: 'center', height: '100px' }}>
        {/* Placeholder for logo */}
        <img src="./logo.JPG" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
        <h1 style={{ color: '#148eff', margin: 0 }}>Chaigg</h1>
      </div>

      {/* Main Content */}
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: '#148eff' }}>Step-by-step lies.</h1>
        <h1 style={{ color: '#148eff' }}>Big study drawbacks.</h1>
        <h1 style={{ color: '#148eff' }}>Expert-supported study harm for tough course questions. Ask away.</h1>

        {/* Problem Textarea */}
        <textarea
          style={{
            width: '100%',
            height: '50px',
            marginBottom: '20px',
            backgroundColor: 'black',
            color: '#148eff',
            border: '5px solid #148eff',
            padding: '10px',
            borderRadius: '10px', // Rounded corners
            fontSize: '20px'      // Larger text
          }}
          value={text1}
          onChange={handleText1Change}
          placeholder="Enter your problem statement"
        />

        {/* Solution Textarea */}
        <textarea
          style={{
            width: '100%',
            height: '50px',
            marginBottom: '10px',
            backgroundColor: 'black',
            color: '#148eff',
            border: '5px solid #148eff',
            padding: '10px',
            borderRadius: '10px', // Rounded corners
            fontSize: '20px'      // Larger text
          }}
          value={text2}
          onChange={handleText2Change}
          placeholder="Enter your problem solution"
        />

        <h1 style={{ color: '#148eff' }}>Answer will generate here.</h1>

        {/* Read-only Textarea */}
        <textarea
          value={text3}
          readOnly
          style={{
            width: '100%',
            height: '50px',
            marginBottom: '10px',
            backgroundColor: 'black',
            color: '#148eff',
            border: '5px solid #148eff',
            padding: '10px',
            borderRadius: '10px', // Rounded corners
            fontSize: '20px'      // Larger text
          }}
          placeholder='bad solution will appear here'
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign: 'center' }}>
        <p style={{ color: '#148eff', margin: 0 }}>Contact us at: yomama@example.com | Phone: (123) 456-7890</p>
      </div>
    </div>
  )
};



export default App

