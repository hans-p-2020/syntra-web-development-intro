import { useState } from "react"

export const useUrlPicker = () => {
    const [ url, setUrl ] = useState('');

    return {
        selectedUrl: url,
        picker: (
            <div style={{marginBottom: '5rem'}}>
                <button onClick={() => setUrl("https://picsum.photos/200/300")} >Normal</button>
                <button onClick={() => setUrl("https://picsum.photos/200/300?grayscale")} >Grayscale</button>
                <button onClick={() => setUrl("https://picsum.photos/200/300/?blur=2")} >Blurry</button>
            </div>
        )
    }
}