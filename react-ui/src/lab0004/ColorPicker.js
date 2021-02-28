
// https://codepen.io/mubangadv/pen/rXWbqQ

import React, { useState } from 'react'
import './ColorPicker.css'

const ColorPicker = () => {
	const [h, setH] = useState(50);
	const [s, setS] = useState(50);
	const [l, setL] = useState(50);

	const preview = () => {
		let hval = h / 100;
		let sval = s / 100;
		let lval = l / 100;
		let hColor = 'HSL(' + hval * 360 + ', 100%, 50%)';
		let sColor = 'HSL(' + hval * 360 + ',' + sval * 100 + '%, 50%)';
		let hsl = 'HSL(' + hval * 360 + ',' + sval * 100 + '%,' + lval * 100 + '%)';

		return hsl;
	}

	const hColor = () => {
		try {
			let hval = h / 100;
			let sval = s / 100;
			let lval = l / 100;
			return 'HSL(' + hval * 360 + ',' + sval * 100 + '%,' + lval * 100 + '%)';
		} catch (error) {
			console.log(error);
		}
	}


	const HSLtoHEX = () => {

		let hvalue = h * 360 / 100;
		let lvalue = l / 100;
		let svalue = s / 100;

		let c = (1 - Math.abs(2 * lvalue - 1)) * svalue,
			x = c * (1 - Math.abs((hvalue / 60) % 2 - 1)),
			m = lvalue - c / 2,
			r = 0,
			g = 0,
			b = 0;

		if (0 <= hvalue && hvalue < 60) {
			r = c; g = x; b = 0;
		} else if (60 <= hvalue && hvalue < 120) {
			r = x; g = c; b = 0;
		} else if (120 <= hvalue && hvalue < 180) {
			r = 0; g = c; b = x;
		} else if (180 <= hvalue && hvalue < 240) {
			r = 0; g = x; b = c;
		} else if (240 <= hvalue && hvalue < 300) {
			r = x; g = 0; b = c;
		} else if (300 <= hvalue && hvalue < 360) {
			r = c; g = 0; b = x;
		}
		r = Math.round((r + m) * 255);
		g = Math.round((g + m) * 255);
		b = Math.round((b + m) * 255);

		r = r.toString(16);
		g = g.toString(16);
		b = b.toString(16);

		if (r.length === 1)
			r = "0" + r;
		if (g.length === 1)
			g = "0" + g;
		if (b.length === 1)
			b = "0" + b;

		return "#" + r + g + b;
	};

	return (

		<div className="center">
			<div className="header">
				Color Picker
  </div>
			<div className="controls">
				<div className="menu">
					<div className="item active" id="hsl-item">
						HSL
      </div>
					<div className="item" id="rgb-item">
						RGB
      </div>
				</div>
				<div className="panel" id="hsl-panel">

					<div className="slider slider-h">
						<label>Hue</label>
						<input
							min="0" max="100"
							value={h}
							type="range"
							onChange={(e) => {
								setH(e.target.value);
							}} />

						<div className="thumb" style={{ left: h * 18.8 / 100 + 'rem', background: hColor() }}></div>
					</div>

					<div className="slider slider-s">
						<label>Saturation</label>
						<input type="range" min="0" max="100" value={s} onChange={(e) => setS(e.target.value)} />
						<div className="thumb" style={{ left: s * 18.8 / 100 + 'rem' }} ></div>
					</div>
					<div className="slider slider-l">
						<label>Lightness</label>
						<input type="range" min="0" max="100" value={l} onChange={(e) => setL(e.target.value)} />
						<div className="thumb" style={{ left: l * 18.8 / 100 + 'rem' }} ></div>
					</div>
				</div>
				<div className="output">
					<div className="hex-code">
						<label>Code</label>
						<div className="code" >
							{/* #40BFBF */}
							{HSLtoHEX()}
						</div>
						<div className="color-preview" style={{ backgroundColor: preview() }}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColorPicker
