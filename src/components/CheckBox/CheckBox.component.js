import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

//styles
import styles from './CheckBox.styles';

//other deps
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = (props) => {
	const [selected, setSelected] = useState([])
	const [skip, setSkip] = useState(true)

	useEffect(() => {
		let tempSelected = [...selected]
		props.setDisabledButton(true)
		props.data.answers.forEach((item) => {
			if (item.value == 'true') {
				tempSelected.push(item.id)
				props.setDisabledButton(false)
			}
		})
		setSelected([...tempSelected])
	}, [])

	const onChangeCheckBox = (id) => {
		if (selected.indexOf(id) !== -1) {
			setSelected(selected.filter(select => select !== id))
		} else {
			setSelected([...selected, id])
		}
	}

	useEffect(() => {
		if (!skip) {
			props.setDisabledButton(true)
			let tempData = [...props.data.answers]
			tempData.forEach((checkbox) => {
				if (selected.indexOf(checkbox.id) !== -1) {
					checkbox.value = 'true';
				} else {
					checkbox.value = 'false';
				}
			})
			props.setData({ ...props.data, answers: tempData })
			props.setDisabledButton(selected.length === 0)
		}
	}, [selected])

	return (
		<View style={styles.container}>
			{props.data.answers.map((cb) => {
				return (
					<TouchableOpacity
						style={[styles.checkBox, { borderColor: (selected.indexOf(cb.id) !== -1) ? '#4C4CFF' : '#E3E3E3' }]}
						key={cb.id}
						onPress={() => {
							onChangeCheckBox(cb.id)
							setSkip(false)
						}}>

						<CheckBox
							value={selected.indexOf(cb.id) !== -1}
							tintColors={{
								true: '#4D4DFF',
								false: '#7F8081'
							}}
							onChange={() => {
								onChangeCheckBox(cb.id)
								setSkip(false)
							}} />

						<Text style={styles.checkBoxText}>{cb.title}</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
};

export default CheckBoxComponent;

