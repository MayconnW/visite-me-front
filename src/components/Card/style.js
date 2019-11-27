import styled from "styled-components";
import Card from "@material-ui/core/CardMedia";
import TypographyMedia from "@material-ui/core/Typography";
import CardActionsMedia from "@material-ui/core/CardActions";

export const CardMedia = styled(Card)`
  opacity: 0.5;
`;

export const Typography = styled(TypographyMedia)`
  text-align: center;
`;

export const TypographyText = styled(TypographyMedia)``;

export const CardActions = styled(CardActionsMedia)`
  display: flex;
  justify-content: space-between;
`;
