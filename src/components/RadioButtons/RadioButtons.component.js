import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

//styles
import styles from './RadioButtons.styles';

const RadioButtons = (props) => {
	const [selected, setSelected] = useState(null);
	const [skip, setSkip] = useState(true)

	const [isPress, setIsPress] = useState(false);

	useEffect(() => {
		props.setDisabledButton(true)
		props.data.answers.forEach((item) => {
			if (item.value == 'true') {
				setSelected(item.id)
				props.setDisabledButton(false)
			}
		})
	}, [])

	useEffect(() => {
		if (selected !== null && !skip) {
			let tempData = [...props.data.answers]
			tempData.forEach((radio) => {
				radio.value = 'false';
			})
			tempData.forEach((radio) => {
				if (radio.id === selected) {
					radio.value = "true";
					if (radio.value === 'true')
						setTimeout(() => { props.onClickNextPage() }, 300)
				}
			})
			props.setData({ ...props.data, answers: tempData })
		}
	}, [selected])

	return (
		<View style={styles.container}>
			{props.data.answers.map((rb) => {
				return (
					<TouchableOpacity
						activeOpacity={0.8}
						style={[styles.radioButtonBox, { borderColor: (isPress && selected === rb.id) ? '#4C4CFF' : '#E3E3E3' }]}
						key={rb.id}
						onPress={() => {
							setSkip(false)
							setSelected(rb.id)
							setIsPress(!isPress)
						}}>

						<RadioButton
							color='#4D4DFF'
							uncheckedColor='#7F8081'
							value={rb.id}
							onPress={() => {
								setSkip(false)
								setSelected(rb.id)
								setIsPress(!isPress)
							}}
							status={selected === rb.id ? 'checked' : 'unchecked'}
						/>

						<Text style={styles.radioButtonText}>{rb.title}</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	);
}

export default RadioButtons;