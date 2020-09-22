import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route"
import Header from "./components/Header"

const items = [
  {
    title: "What is React?",
    content: "React is front end js library"
  },
  {
    title: "Why use React?",
    content: "React is fav library among engineers"
  },
  {
    title: "How use React?",
    content: "React is use by create items"
  }
]

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Persian Green",
    value: "green"
  },
  {
    label: "A Shade of Blue",
    value: "blue"
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Header></Header>
      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} selected={selected} label="Select A Color" onSelectedChange={setSelected}></Dropdown>
      </Route>
    </div>
  )
}
