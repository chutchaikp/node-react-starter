import React from 'react'
import BlockRightContent from './common/BlockRightContent'
import BlockLeftContent from './common/BlockLeftContent'
import BlockMiddleContent from './common/BlockMiddleContent'

import AboutContent from './content/AboutContent.json'
import IntroContent from './content/IntroContent.json'
import IntroMiddleContent from './content/IntroMiddleContent.json'
import mc from './content/MissionContent.json'
import ContactForm from './components/ContactForm'


export default function Home() {
	return (
		<div>

			{/* Intro Landing page demo */}
			<BlockLeftContent id="intro" title={IntroContent.title} text={IntroContent.text} icon="intro.svg" buttons={IntroContent.buttons} />

			{/* Middle */}
			<BlockMiddleContent title={IntroMiddleContent.title} text={IntroMiddleContent.text} buttons={IntroMiddleContent.buttons} />

			{/* About */}
			<BlockRightContent id="about" title={AboutContent.title} text={AboutContent.text} icon="walking.svg" />

			{/* Mission */}
			<BlockLeftContent id="mission" title={mc.title} text={mc.text} icon={mc.icon} buttons={null} />


			<ContactForm />

		</div>
	)
}
