import React, {useState} from 'react'
import PropsComp from './PropsComp'

const StateComp = () => {
    const [showContent, setShowContent] = useState(false)
    const testVariable = 'halo testVariable'
    const handleOnClick = () => {
        setShowContent(!showContent)
    }

    return (
        <div>
            <h3>
                State components
            </h3>
            <button onClick={handleOnClick}>
                Show
            </button>

            {
                showContent && (
                    <PropsComp 
                        testVariable={testVariable}
                        variableLain="Saya variabel lain"
                    />
                )
            }
        </div>
    )
}

export default StateComp