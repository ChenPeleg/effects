<div class="wrapper">
	<div class="container">
		<span />
		<span />
		<span />
		<span />
		<span />
	</div>
</div>

<style>
	:root {
		--speed: 700;
	}
	div.wrapper {
		display: inline-block;
		min-width: 80px;
		min-height: 30px;
	}

	div.container {
		display: inline-block;
		position: relative;
		min-width: 80px;
	}

	span {
		display: block;
		bottom: 0px;
		width: 9px;
		height: 5px;
		background: #9b59b6;
		position: absolute;
		animation: audio-wave calc(var(--speed) * 1.5ms) infinite ease-in-out;
	}

	span:nth-child(2) {
		left: 11px;
		animation-delay: calc(var(--speed) * 0.2ms);
	}

	span:nth-child(3) {
		left: 22px;
		animation-delay: calc(var(--speed) * 0.4ms);
	}

	span:nth-child(4) {
		left: 33px;
		animation-delay: calc(var(--speed) * 0.6ms);
	}

	span:nth-child(5) {
		left: 44px;
		animation-delay: calc(var(--speed) * 0.8ms);
	}

	@keyframes audio-wave {
		0% {
			height: 5px;
			transform: translateY(0px);
			background: #9b59b6;
		}
		25% {
			height: 40px;
			transform: translateY(20px);
			background: #3498db;
		}
		/*effect is to animate the height of each span from 5px to 30px*/
		/*translateY makes Y axis move down to give the effect that it is growing from the center*/

		50% {
			height: 5px;
			transform: translateY(0px);
			background: #9b59b6;
		}
		100% {
			height: 5px;
			transform: translateY(0px);
			background: #9b59b6;
		}
	}
</style>
