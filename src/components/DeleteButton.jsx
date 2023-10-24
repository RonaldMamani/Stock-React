import PropTypes from "prop-types"
import useStock from "../hooks/useStock"

DeleteButton.propTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string
}

export default function DeleteButton({itemName, itemId}) {
    const { deleteItem } = useStock()
    const handleDelete = () => {
        if(confirm(`Tem certeza que deseja excluir ${itemName}?`)){
            deleteItem(itemId)
        }
    }

    return (
        <button onClick={handleDelete} className="button is-danger is-small">Excluir</button>
    )
}