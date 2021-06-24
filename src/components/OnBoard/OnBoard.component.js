import React from 'react';
import { Text, View } from 'react-native';

//styles
import styles from './OnBoard.styles';

//other deps
import { SvgUri } from 'react-native-svg';

const onBoard = ({ image, title, description, setDisabledButton }) => {
	setDisabledButton(false)

	return (
		<View style={styles.container}>
			{image !== null &&
				<SvgUri
					uri={image.image_url}
					width={96}
					height={96} />}

			<Text style={styles.question}>{title}</Text>

			<Text style={styles.paragraph}>{description}</Text>
		</View>
	);
}

export default onBoard;