

export default function Row(props) {
    return (
        <tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.description}
            </td> 
        </tr>
    )
}

