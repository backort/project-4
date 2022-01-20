import { Container } from '@mui/material';
import styles from './User.module.scss'
import classNames from 'classnames';
import Avatar from '../avatar/Avatar';

export default function User({name, info, avatar, size, verified}){
    return(
        <Container className={classNames(styles.user)}>
            <Avatar />
        </Container>
    );
}