interface PriceProps {
    value: number
}

const FormattedPrice: React.FC<PriceProps> = ({
    value
}) => {
    const currency = new Intl.NumberFormat('en-IN').format(value)
    return (
        <>
            {currency}
        </>
    )
}

export default FormattedPrice