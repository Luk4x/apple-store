interface Props {
    value: number;
}

export default function Currency({ value }: Props) {
    return (
        <span>
            {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(value)}
        </span>
    );
}
