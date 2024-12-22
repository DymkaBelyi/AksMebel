from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = 'Пользователи'


class AksHomeMebel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, verbose_name='Название')
    category = models.TextField(verbose_name='Категория', null=True)
    price_blr = models.TextField(verbose_name='Цена', blank=True)
    link = models.TextField(verbose_name='Ссылка')
    image = models.TextField(verbose_name="Ссылка на фото")
    material = models.TextField(verbose_name='Материал', blank=True)
    color = models.TextField(verbose_name='Цвет')
    quantity = models.TextField(verbose_name='Количество')

    def __str__(self):
        return (f"{self.name} ---- {self.category} ---- {self.price_blr} ---- {self.link} ---- {self.image} ---- {self.material} ----"
                f"{self.color} ---- {self.quantity}")

    class Meta:
        verbose_name = 'Мебель для дома и офиса'  # Указываем имя как будет отображаться в админ панели
        verbose_name_plural = 'Мебель'  # Имя во множественном числе
        ordering = ['id']  # ordering по чем будем сортировать в админ панели

    def clean(self):  # чтобы id был NOT NULL!!!
        if not self.id:
            self.id = AksHomeMebel.objects.last().id + 1

