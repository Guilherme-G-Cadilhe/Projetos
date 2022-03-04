type tweetProps = {
    text: string;
}

export function Tweet(props:tweetProps) {
    return(
        <p>{props.text}</p>
    );
}