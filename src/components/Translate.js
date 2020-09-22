import React, { useState } from "react"
import Dropdown from "./Dropdown"
import Convert from "./Convert"

const options = [
  {
    label: "Africans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  },
  {
    label: "Dutch",
    value: "nl"
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0])

  const [text, setText] = useState("")
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            type="text"
          />
        </div>
      </div>

      <Dropdown label="Select A Language" selected={language} onSelectedChange={setLanguage} options={options}></Dropdown>

      <hr />

      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}></Convert>
    </div>
  )
}

export default Translate
