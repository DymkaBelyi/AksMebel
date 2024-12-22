from django.contrib import admin
from .models import AksHomeMebel, CustomUser

class AksHomeModel(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'price_blr', 'link', 'quantity']  # выбираем поля,которые будут отображаться в админ панели
    list_display_links = ['name', 'link']  # По каким полям можем переходить в карточку
    search_fields = ['price_blr']  # Задаем по каким параметрам можем фильтровать в админке
    # list_editable = ['price_blr']  # Задаем какой параметр можем менять не заходя в карточку товара
    list_filter = ['price_blr', 'color', 'category']  # Добавляем фильтрацию в админке в правом верхнем углу



admin.site.register(AksHomeMebel)
admin.site.register(CustomUser)
