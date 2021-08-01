export default function FilterButton(props) {
    return(
        <div>
        <li className="block m-2 rounded-md bg-blue-100 text-blue-700 text-center">
            <button 
                className=" "
                type="button" 
                aria-pressed={props.isPressed}
                onClick={() => props.setFilter(props.name)}
            >
            <ul class="leading-6 font-medium text-c p-4">
                {props.name}
            </ul>
            </button>
        </li>
        </div>
    );
}
