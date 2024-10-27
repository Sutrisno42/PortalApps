import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  articles: any[] = [];
  search: string = ''; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNewsArticles(); 
  }

  getNewsArticles(query: string = 'election') {
    const apiKey = 'rteBHxYZD5b4UTxJMllfenV1s6IHrCPE';
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;
    this.http.get(url).subscribe((response: any) => {
      this.articles = response.response.docs;
    }, (error) => {
      console.error('Error fetching news articles', error);
    });
  }

  searchArticles() {
    if (this.search.trim()) {
      this.getNewsArticles(this.search); 
    } else {
      this.getNewsArticles(); 
    }
  }
}
