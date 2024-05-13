export default function SubmitButton({ disabled, text }) {
    return (
        <button className="btn btn-outline-light btn-lg btn-blue px-5" type="submit" disabled={disabled}>
            {text}
        </button>
    )
}