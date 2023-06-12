const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContact:(contact) => {
				// const data = {}
				setStore({contacts:[...getStore().contacts,contact]})
			}
		}
	}
};


export default getState;
