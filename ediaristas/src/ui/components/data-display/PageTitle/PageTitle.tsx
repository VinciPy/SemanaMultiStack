import react from 'react';
import { PageSubtitleStyle, PageTitleContainer, PageTitleStyled } from './styles';
interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {

    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            <PageSubtitleStyle>
            {props.subtitle}
            </PageSubtitleStyle>
        </PageTitleContainer>
    )
}

export default PageTitle;