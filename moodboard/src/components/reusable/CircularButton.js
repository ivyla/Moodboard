// CircularButton.js
// Requires the addition of an SVG imported JS file, examples in the icons folder

const CircularButton = ({action, image}) => {
    return (
        <button
            className="w-12 h-12 bg-primary rounded-full inline-block"
            onClick={() => {
                action()
            }}
        >
            {image}
        </button>
    )
}

export default CircularButton
