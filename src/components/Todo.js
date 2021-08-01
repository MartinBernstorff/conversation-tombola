import React from "react";
import Airtable from 'airtable-node'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Activities')

const lwsLog = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

const Mousetrap = require("mousetrap");

export default function Todo(props) {
    let HrefLink = "https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/" + props.id

    Mousetrap.bind("r", () => props.reRun());

    return (
    <div>
        <a href={HrefLink} className="shadow-md hover:shadow-lg group block rounded-lg p-4 border hover:border-gray-200 m-2 text-center justify-center">
            <div className="h-32 p-3 grid place-items-center">
                <div className="leading-6 font-medium text-black text-c text-xl">{props.name}</div>
            </div>
        </a>
        <button onClick={props.reRun}
            className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm max-w-sm"
        >
            <FontAwesomeIcon icon={faDice} />
        </button>
        <button 
            className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm max-w-sm"

            onClick={markFinished}
        >
                Mark as "Fin"
        </button>
        <button 
            className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm max-w-sm"

            onClick={addToday}
        >
                Select for today
        </button>
    </div>
    );

    function markFinished () {
        console.log("Marking " + props.name)
        airtable.update(props.id, {"Fin": true}).then(resp => {
            console.log(resp)
            props.reRun()
        })
    }

    function addToday () {
        console.log("Adding " + props.name + " to today's log")
        
        lwsLog.create(
            {"fields": {
                "What?": [props.id],
                "Context": "Leisure"
            }}
        ).then(resp => {
            console.log(resp)
        })
    }
}
