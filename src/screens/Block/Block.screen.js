import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

//styles
import styles from './Block.screen.styles';

const Card = ({ image, title, description }) => {
	return (
		<View style={styles.card}>
			<Image source={image} style={styles.image} />

			<View style={{ paddingHorizontal: 16 }}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</View>
	)
}

const BlockScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<Card
				image={require('../../assets/images/Block1.jpg')}
				title='L-теанин — краткое руководство'
				description='Ежедневный стресс стал нормальной частью современной жизни. Давление на работе, семейные конфликты, финансовое давление, количество машин на дорогах и управлени...' />

			<Card
				image={require('../../assets/images/Block2.jpg')}
				title='10 натуральных способов улучшить здоровье'
				description='Ежедневный стресс стал нормальной частью современной жизни. Давление на работе, семейные конфликты, финансовое давление, количество машин на дорогах и управлени...' />
		</ScrollView>
	)
};

export default BlockScreen;