from django.db import models

# Create your models here.

class StoredSession(models.Model):

   id = models.CharField(max_length = 36, primary_key=True)
   properties = models.JSONField()
   data = models.JSONField()

   def __str__(self):
        return '<StoredSession:' + self.id + '>'

   class Meta:
      db_table = "stored_sessions"