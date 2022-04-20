import { useState } from "react"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"

const Dropdown = ({setName, list}) => {
    const [isListOpen, setIsListOpen] = useState(false)

    const toggleList = () => {
        setIsListOpen(!isListOpen)
    }

    return (
        <div>
            <button
                type="button"
                className="dd-header"
                onClick={toggleList}
            >
                {isListOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </button>
            <div>
                {isListOpen && (
                    <div
                        role="list"
                        className="dd-list"
                    >
                        {list.map((name, index) => (
                            <button
                                type="button"
                                className="dd-list-item"
                                key={index}
                                value={name}
                                onClick={(e) => setName(e)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                )}
            </div>            
        </div>
    )
}

export default Dropdown