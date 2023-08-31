// Styles
import styles from './ArticleCard.module.scss';
// Components
import { IArticle } from '@/types/articles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArticleEditForm from '../ArticleEditForm/ArticleEditForm';

// Hooks
import { useArticleController } from '@/hooks/useArticleController';
import { useState } from 'react';
import { useAppSelector } from '@/app/hooks';

interface Props {
  article: IArticle;
}

function ArticleCard({ article }: Props) {
  const isAuth = useAppSelector((state) => state.auth._isAuth);
  const { deleteArticle } = useArticleController();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Card sx={{ minWidth: 275, width: '100%' }} className={styles.card}>
      {isAuth && (
        <>
          <button
            className={styles.deleteButton}
            onClick={() => deleteArticle(article._id)}
            title="Delete"
          >
            <DeleteIcon />
          </button>
          {!isEdit && (
            <button
              className={styles.editButton}
              title={isEdit ? 'Save' : 'Edit'}
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <EditIcon />
            </button>
          )}
        </>
      )}
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          variant="h5"
          color="text.secondary"
          gutterBottom
        >
          {article.pubDate}
        </Typography>
        {isEdit ? (
          <ArticleEditForm
            _id={article._id}
            content={article.content}
            creator={article.creator}
            title={article.title}
            onSave={() => {
              setIsEdit(false);
            }}
          />
        ) : (
          <>
            <Typography variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {article.creator}
            </Typography>
            <Typography variant="body2">{article.content}</Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={article.link} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
