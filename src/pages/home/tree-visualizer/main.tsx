type PropsType = {
    data: string;
}

export const TreeVisualizer = (props: PropsType) => {
    console.log(props.data)
    return (
        <div>Tree</div>
    )
}