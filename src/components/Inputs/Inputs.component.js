import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

//styles
import styles from './Inputs.styles';

const Inputs = (props) => {
	const [focused, isFocused] = useState(false);

	useEffect(() => {
		props.setDisabledButton(true)
		props.data.answers.forEach((item) => {
			if (item.value != '' || (props.type == 'phone' && item.value.length == 18)) {
				props.setDisabledButton(false)
			}
		})
	}, [])

	const disBtn = (data) => {
		let dis = false;
		data.forEach(item => {
			if (item.value === "") {
				dis = true
			}
			else {
				if (props.type === "email") {
					dis = validateEmail(item.value)
				}
			}
		})
		props.setDisabledButton(dis)
	}

	return (
		<>
			{props.data.answers.map((inp, index) => {
				switch (props.type) {
					case 'text': {
						return (
							<View key={inp.id} >
								<Text style={styles.question}>{inp.title}</Text>

								{inp.second_hint !== 'empty' &&
									<Text style={styles.paragraph}>{inp.second_hint}</Text>}

								<View>
									<TextInput
										style={[styles.input, { borderColor: focused ? '#4C4CFF' : '#E3E3E3' }]}
										onChange={(e) => {
											let tempData = { ...props.data }
											tempData.answers[index].value = e.nativeEvent.text
											props.setData(tempData)
											disBtn(tempData.answers);
										}}
										value={inp.value}
										id={inp.id}
										onFocus={() => {
											isFocused(!focused)
										}} />
								</View>
							</View>
						)
					}

					case 'number': {
						return (
							<View key={inp.id} >
								<Text style={styles.question}>{inp.title}</Text>

								{inp.second_hint != 'empty' &&
									<Text style={styles.paragraph}>{inp.second_hint}</Text>}

								<View>
									<TextInput
										keyboardType='number-pad'
										style={styles.input}
										onChange={(e) => {
											let tempData = { ...props.data }
											tempData.answers[index].value = e.nativeEvent.text
											props.setData(tempData)
											disBtn(tempData.answers);
										}}
										value={inp.value}
										id={inp.id} />
								</View>
							</View>
						)
					}
				}
			})}
		</>
	)
}

export default Inputs;