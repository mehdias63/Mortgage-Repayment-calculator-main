document
	.getElementById('calculateBtn')
	.addEventListener('click', () => {
		const mortgageAmount = document.getElementById('mortgageAmount')
		const mortgageTerm = document.getElementById('mortgageTerm')
		const interestRate = document.getElementById('interestRate')
		const mortgageTypeElement = document.querySelector(
			'input[name="mortgageType"]:checked',
		)

		const amountUnit = document.getElementById('amountUnit')
		const termUnit = document.getElementById('termUnit')
		const rateUnit = document.getElementById('rateUnit')

		const mortgageAmountError = document.getElementById(
			'mortgageAmountError',
		)
		const mortgageTermError = document.getElementById(
			'mortgageTermError',
		)
		const interestRateError = document.getElementById(
			'interestRateError',
		)
		const mortgageTypeError = document.getElementById(
			'mortgageTypeError',
		)

		const results = document.getElementById('results')

		const monthlyRepayment = document.getElementById(
			'monthlyRepayment',
		)
		const totalRepayment = document.getElementById('totalRepayment')

		let hasError = false

		// Reset error styles
		mortgageAmount.classList.remove('border-[#D73328]')
		mortgageTerm.classList.remove('border-[#D73328]')
		interestRate.classList.remove('border-[#D73328]')
		amountUnit.classList.remove('bg-[#D73328]')
		termUnit.classList.remove('bg-[#D73328]')
		rateUnit.classList.remove('bg-[#D73328]')
		mortgageAmountError.classList.add('hidden')
		mortgageTermError.classList.add('hidden')
		interestRateError.classList.add('hidden')
		mortgageTypeError.classList.add('hidden')

		// Validate inputs
		if (!mortgageAmount.value) {
			mortgageAmount.classList.add('border-[#D73328]')
			amountUnit.classList.add('bg-[#D73328]')
			amountUnit.classList.add('text-white')
			mortgageAmountError.classList.remove('hidden')
			hasError = true
		}

		if (!mortgageTerm.value) {
			mortgageTerm.classList.add('border-[#D73328]')
			termUnit.classList.add('bg-[#D73328]')
			termUnit.classList.add('text-white')
			mortgageTermError.classList.remove('hidden')
			hasError = true
		}

		if (!interestRate.value) {
			interestRate.classList.add('border-[#D73328]')
			rateUnit.classList.add('bg-[#D73328]')
			rateUnit.classList.add('text-white')
			interestRateError.classList.remove('hidden')
			hasError = true
		}

		if (!mortgageTypeElement) {
			mortgageTypeError.classList.remove('hidden')
			hasError = true
		}

		if (hasError) {
			return
		}

		// Clear the previous results content
		results.innerHTML = '' // Ensures the previous content is cleared before updating

		// Calculate results
		const mortgageAmountValue = parseFloat(mortgageAmount.value)
		const mortgageTermValue = parseInt(mortgageTerm.value)
		const interestRateValue = parseFloat(interestRate.value)
		const mortgageType = mortgageTypeElement.value

		const monthlyRate = interestRateValue / 100 / 12
		const totalMonths = mortgageTermValue * 12

		if (mortgageType === 'repayment') {
			const monthly =
				(mortgageAmountValue * monthlyRate) /
				(1 - Math.pow(1 + monthlyRate, -totalMonths))
			const total = monthly * totalMonths

			results.innerHTML = `
      <p class="text-white text-lg font-bold">Calculation Results:</p>
      <p id="monthlyRepayment" class="text-white">Monthly Repayment: £${monthly.toFixed(
				2,
			)}</p>
      <p id="totalRepayment" class="text-white">Total Repayment: £${total.toFixed(
				2,
			)}</p>
    `
		} else if (mortgageType === 'interestOnly') {
			const total =
				mortgageAmountValue *
				(interestRateValue / 100) *
				mortgageTermValue

			results.innerHTML = `
      <p class="text-white text-lg font-bold">Calculation Results:</p>
      <p id="totalRepayment" class="text-white">Total Repayment: £${total.toFixed(
				2,
			)}</p>
    `
		}
	})

// Remove error immediately when input is corrected
document
	.getElementById('mortgageAmount')
	.addEventListener('input', () => {
		const mortgageAmount = document.getElementById('mortgageAmount')
		const mortgageAmountError = document.getElementById(
			'mortgageAmountError',
		)
		const amountUnit = document.getElementById('amountUnit')

		if (mortgageAmount.value) {
			mortgageAmount.classList.remove('border-[#D73328]')
			amountUnit.classList.remove('bg-[#D73328]')
			amountUnit.classList.remove('text-white')
			mortgageAmountError.classList.add('hidden')
		}
	})

document
	.getElementById('mortgageTerm')
	.addEventListener('input', () => {
		const mortgageTerm = document.getElementById('mortgageTerm')
		const mortgageTermError = document.getElementById(
			'mortgageTermError',
		)
		const termUnit = document.getElementById('termUnit')

		if (mortgageTerm.value) {
			mortgageTerm.classList.remove('border-[#D73328]')
			termUnit.classList.remove('bg-[#D73328]')
			termUnit.classList.remove('text-white')
			mortgageTermError.classList.add('hidden')
		}
	})

document
	.getElementById('interestRate')
	.addEventListener('input', () => {
		const interestRate = document.getElementById('interestRate')
		const interestRateError = document.getElementById(
			'interestRateError',
		)
		const rateUnit = document.getElementById('rateUnit')

		if (interestRate.value) {
			interestRate.classList.remove('border-[#D73328]')
			rateUnit.classList.remove('bg-[#D73328]')
			rateUnit.classList.remove('text-white')
			interestRateError.classList.add('hidden')
		}
	})

// Remove error for mortgage type
const mortgageTypeRadios = document.querySelectorAll(
	'input[name="mortgageType"]',
)
mortgageTypeRadios.forEach(radio => {
	radio.addEventListener('change', () => {
		const mortgageTypeError = document.getElementById(
			'mortgageTypeError',
		)
		mortgageTypeError.classList.add('hidden')
	})
})

// Clear all fields and reset to initial state
document
	.getElementById('clearAllBtn')
	.addEventListener('click', () => {
		document.getElementById('mortgageAmount').value = ''
		document.getElementById('mortgageTerm').value = ''
		document.getElementById('interestRate').value = ''

		const mortgageTypeRadios = document.querySelectorAll(
			'input[name="mortgageType"]',
		)
		mortgageTypeRadios.forEach(radio => {
			radio.checked = false
		})

		const results = document.getElementById('results')
		results.innerHTML = `
		<div
	id="results"
	class="bg-[#133041] text-white flex flex-col items-center justify-center p-6 rounded-r-2xl lg:rounded-bl-[5rem]"
>
	<img
		src="./images/illustration-empty.svg"
		alt="illustration"
	/>
	<h2 class="text-xl font-bold mb-2">Results shown here</h2>
	<p class="text-sm">
		Complete the form and click "calculate repayments" to see
		what your monthly repayments would be.
	</p>
    </div>
  `

		// Reset error styles
		document
			.querySelectorAll('.border-[#D73328]')
			.forEach(element => {
				element.classList.remove('border-[#D73328]')
			})

		document.querySelectorAll('.bg-[#D73328]').forEach(element => {
			element.classList.remove('bg-[#D73328]')
		})

		document.querySelectorAll('.hidden').forEach(element => {
			element.classList.add('hidden')
		})
	})
